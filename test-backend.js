// ============================================================================
// SCRIPT DE TESTE - Backend VR Oftalmologia
// Verifica se o backend está funcionando e quais endpoints estão disponíveis
// ============================================================================

const BACKEND_URL = 'http://localhost:3000';
const GRAPHQL_ENDPOINT = `${BACKEND_URL}/graphql`;

async function testBackend() {
    console.log('🔍 Testando Backend VR Oftalmologia...\n');

    // 1. Testar se servidor está ativo
    try {
        console.log('📡 Verificando servidor...');
        const response = await fetch(BACKEND_URL);
        if (response.ok) {
            console.log('✅ Servidor backend está ativo!');
        } else {
            console.log('⚠️ Servidor respondeu mas com erro:', response.status);
        }
    } catch (error) {
        console.log('❌ Servidor backend NÃO está rodando!');
        console.log('💡 Execute: npm run start:dev');
        return;
    }

    // 2. Testar GraphQL endpoint
    try {
        console.log('\n📡 Verificando GraphQL...');
        const response = await fetch(GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query {
                        __schema {
                            types {
                                name
                            }
                        }
                    }
                `
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ GraphQL endpoint funcionando!');
            console.log(`📊 ${data.data.__schema.types.length} tipos GraphQL disponíveis`);
        } else {
            console.log('⚠️ GraphQL endpoint com problema:', response.status);
        }
    } catch (error) {
        console.log('❌ GraphQL endpoint não disponível:', error.message);
    }

    // 3. Testar mutation de teste (sem autenticação)
    try {
        console.log('\n📡 Testando estrutura de autenticação...');
        const response = await fetch(GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query {
                        __type(name: "LoginInput") {
                            fields {
                                name
                                type {
                                    name
                                }
                            }
                        }
                    }
                `
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data.__type) {
                console.log('✅ Estrutura de autenticação disponível!');
                console.log('🔑 Campos de login detectados:', 
                    data.data.__type.fields.map(f => f.name).join(', '));
            } else {
                console.log('⚠️ Estrutura de autenticação não encontrada');
            }
        }
    } catch (error) {
        console.log('❌ Erro ao verificar autenticação:', error.message);
    }

    console.log('\n' + '='.repeat(60));
    console.log('🎯 RESUMO:');
    console.log('📍 Backend URL: ' + BACKEND_URL);
    console.log('📍 GraphQL URL: ' + GRAPHQL_ENDPOINT); 
    console.log('📍 Frontend URL: http://localhost:8081');
    console.log('='.repeat(60));
}

// Executar teste
testBackend(); 