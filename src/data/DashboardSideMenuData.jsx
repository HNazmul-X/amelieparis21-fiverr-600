export const ProfileSidebarData = [
    {
        icon: "gg:profile",
        label: "Profile Request",
        destination: "",
        id: "f00a5ae9-b5f1-44af-811b-dc94831bef8f",
        dropdown: [
            {
                label: "All User Profile",
                destination: "/admin/profile-request/all-user-profile",
            },
            {
                label: "Approved Profile",
                destination: "/admin/profile-request/created-profile",
            },
            {
                label: "Pending Profile",
                destination: "/admin/profile-request/pending-profile",
            },
        ],
    },
    {
        icon: "fa6-solid:id-card",
        label: "Ordered Card",
        destination: "",
        id: "31a57a94-f16a-4ce0-b2f4-2029462fc2b9",
        dropdown: [
            {
                label: "All Card",
                destination: "/admin/card-request/all",
            },
            {
                label: "Delivered Card",
                destination: "/admin/card-request/all/delivered",
            },
            {
                label: "Rejected Card",
                destination: "/admin/card-request/all/rejected",
            },
        ],
    },
    {
        icon: "fa-solid:home",
        label: "Back To Home",
        destination: "/",
        id: "'8259a9b2-56e5-4ff1-b7e3-4080245bef9c'",
        dropdown: [],
    },
];
