import { useState } from "react";

// Data jaringan blockchain yang didukung
const networks = [
    {
        id: 1,
        name: "0G-Testnet",
        icon: "0G",
        type: "testnet",
        stakeEnabled: true,
        guideLink: "#",
        stakeLink: "#",
    },
    {
        id: 2,
        name: "Aztec Labs-Testnet",
        icon: "aztec",
        type: "testnet",
        stakeEnabled: false,
        guideLink: "#",
        stakeLink: "#",
    },
    {
        id: 3,
        name: "Drosera-Testnet",
        icon: "drosera",
        type: "testnet",
        stakeEnabled: false,
        guideLink: "#",
        stakeLink: "#",
    },
    {
        id: 4,
        name: "Empeiria-Testnet",
        icon: "empe",
        type: "testnet",
        stakeEnabled: true,
        guideLink: "#",
        stakeLink: "#",
    },
    {
        id: 5,
        name: "Helios-Testnet",
        icon: "helios",
        type: "testnet",
        stakeEnabled: true,
        guideLink: "#",
        stakeLink: "#",
    },
    {
        id: 6,
        name: "Warden-Testnet",
        icon: "warden",
        type: "testnet",
        stakeEnabled: true,
        guideLink: "#",
        stakeLink: "#",
    },
];

// Komponen utama untuk menampilkan jaringan yang didukung
const SupportedNetworks = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter jaringan berdasarkan tab yang aktif
    const filteredNetworks = networks.filter((network) => {
        if (activeFilter === "all") return true;
        return network.type === activeFilter;
    });

    // Hitung jumlah setiap kategori
    const counts = {
        all: networks.length,
        mainnet: networks.filter((n) => n.type === "mainnet").length,
        testnet: networks.filter((n) => n.type === "testnet").length,
    };

    return (
        <section className="c-space my-20" id="networks">
            <div className="w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Supported{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Networks
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our supported networks and discover how we contribute to
                        decentralized blockchain projects.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <FilterTab
                        label="All"
                        count={counts.all}
                        isActive={activeFilter === "all"}
                        onClick={() => setActiveFilter("all")}
                    />
                    <FilterTab
                        label="Mainnet"
                        count={counts.mainnet}
                        isActive={activeFilter === "mainnet"}
                        onClick={() => setActiveFilter("mainnet")}
                    />
                    <FilterTab
                        label="Testnet"
                        count={counts.testnet}
                        isActive={activeFilter === "testnet"}
                        onClick={() => setActiveFilter("testnet")}
                    />
                </div>

                {/* Network Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNetworks.map((network) => (
                        <NetworkCard key={network.id} network={network} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Komponen untuk tab filter
const FilterTab = ({ label, count, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
        >
            {label}{" "}
            <span
                className={`ml-2 px-2 py-0.5 rounded-full text-sm ${isActive ? "bg-gray-200" : "bg-gray-700"
                    }`}
            >
                {count}
            </span>
        </button>
    );
};

// Komponen untuk kartu jaringan individual
const NetworkCard = ({ network }) => {
    return (
        <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20">
            {/* Icon dan Network Name */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                    <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                        <img
                            src={`assets/logos/${network.icon}.svg`}
                            alt={network.name}
                            className="w-8 h-8"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.innerHTML = `<span class="text-purple-400 text-xl font-bold">${network.name[0]}</span>`;
                            }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{network.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span
                            className={`w-2 h-2 rounded-full ${network.type === "mainnet" ? "bg-green-400" : "bg-green-400"
                                }`}
                        ></span>
                        <span className="text-gray-400 text-sm capitalize">
                            {network.type}
                        </span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
                {network.stakeEnabled ? (
                    <a
                        href={network.stakeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center"
                    >
                        Stake
                    </a>
                ) : (
                    <button
                        disabled
                        className="py-2.5 px-4 rounded-lg font-medium transition-all duration-300 bg-gray-800 text-gray-500 cursor-not-allowed"
                    >
                        Stake
                    </button>
                )}

                <a
                    href={network.guideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 text-center"
                >
                    Guide
                </a>
            </div>
        </div>
    );
};

export default SupportedNetworks;
