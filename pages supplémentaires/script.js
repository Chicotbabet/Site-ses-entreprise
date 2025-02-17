document.addEventListener("DOMContentLoaded", function () {
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    const costsCtx = document.getElementById("costsChart").getContext("2d");

    new Chart(revenueCtx, {
        type: "bar",
        data: {
            labels: ["Tasses à café", "Stylos", "Clés USB"],
            datasets: [
                {
                    label: "Chiffre d'Affaires (€)",
                    data: [350000, 170000, 350000],
                    backgroundColor: "#007bff",
                },
                {
                    label: "Bénéfice (€)",
                    data: [220000, 74800, 161000],
                    backgroundColor: "#ffc107",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permet de mieux contrôler la taille
        },
    });

    new Chart(costsCtx, {
        type: "pie",
        data: {
            labels: [
                "Salaires", "Loyer", "Électricité", "Matières premières", "Marketing", "Autres charges", "Dons"
            ],
            datasets: [{
                data: [31400, 5090, 2500, 5000, 3000, 2500, 50000],
                backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#C70039", "#900C3F"],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});
