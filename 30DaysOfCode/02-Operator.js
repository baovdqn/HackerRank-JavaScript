function solve(meal_cost, tip_percent, tax_percent) {
    var totalcost, tip, tax;
    tip = meal_cost * tip_percent / 100;
    tax = meal_cost * tax_percent / 100;
    totalcost = meal_cost + tip + tax;
    console.log(Math.round(totalcost));

}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
