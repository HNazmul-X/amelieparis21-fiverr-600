export const ProfileSidebarData = [
    {
        icon: "gg:profile",
        label: "Demande de Profil",
        destination: "",
        id: "f00a5ae9-b5f1-44af-811b-dc94831bef8f",
        dropdown: [
            {
                label: "Tous les profils d'utilisateur",
                destination: "/admin/profile-request/all-user-profile",
            },
            {
                label: "Profil approuvé",
                destination: "/admin/profile-request/created-profile",
            },
            {
                label: "Profil en attente",
                destination: "/admin/profile-request/pending-profile",
            },
        ],
    },
    {
        icon: "fa6-solid:id-card",
        label: "Demandes de carte",
        destination: "",
        id: "31a57a94-f16a-4ce0-b2f4-2029462fc2b9",
        dropdown: [
            {
                label: "Toutes les cartes",
                destination: "/admin/card-request/all",
            },
            {
                label: "Livré",
                destination: "/admin/card-request/all/delivered",
            },
            {
                label: "Rejetée",
                destination: "/admin/card-request/all/rejected",
            },
        ],
    },
    {
        icon: "fa-solid:home",
        label: "De retour à la maison",
        destination: "/",
        id: "'8259a9b2-56e5-4ff1-b7e3-4080245bef9c'",
        dropdown: [],
    },
];
