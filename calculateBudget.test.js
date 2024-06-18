function calculateBudget(income, expenses) {
    if (!Array.isArray(expenses)) throw new Error("Expenses must be an array");
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
    return income - totalExpenses;
}

module.exports = calculateBudget;


//const calculateBudget = require('./calculateBudget');
//1er test effectué
test('Calcul correct du budget avec des entrées valides', () => {
    const income = 5000;
    const expenses = [1000, 200, 300];
    const result = calculateBudget(income, expenses);
    expect(result).toBe(3500);
});

// T2eme test pour la gestion des erreurs
test('Gestion des erreurs lorsque les dépenses ne sont pas un tableau', () => {
    const income = 5000;
    const expenses = "not an array";
    expect(() => calculateBudget(income, expenses)).toThrow("Expenses must be an array");
});

// Test pour les tableaux vides 
test('Comportement avec des tableaux vides', () => {
    const income = 5000;
    const expenses = [];
    const result = calculateBudget(income, expenses);
    expect(result).toBe(5000);
});

// Test pour vérifier le comportement avec des valeurs négatives
test('Comportement avec des valeurs négatives', () => {
    const income = 5000;
    const expenses = [1000, -200, 300];
    const result = calculateBudget(income, expenses);
    expect(result).toBe(4900);
});
