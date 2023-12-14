// exemplo.test.js

describe('Exemplo de conjunto de testes', () => {
  // Antes de todos os testes neste bloco describe
  beforeAll(() => {
    console.log('Antes de todos os testes neste bloco describe');
  });

  // Depois de todos os testes neste bloco describe
  afterAll(() => {
    console.log('Depois de todos os testes neste bloco describe');
  });

  // Antes de cada teste neste bloco describe
  beforeEach(() => {
    console.log('Antes de cada teste neste bloco describe');
  });

  // Depois de cada teste neste bloco describe
  afterEach(() => {
    console.log('Depois de cada teste neste bloco describe');
  });

  // Teste específico
  test('Teste 1', () => {
    expect(1 + 1).toBe(2);
  });

  // Teste específico
  test('Teste 3', () => {
    expect(2 * 2).toBe(4);
  });

  // Teste que falha
  test('Teste que não falha mais', () => {
    console.log('Teste 2');
    expect(2 * 2).toBe(4);
  });
});
