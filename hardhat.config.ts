import * as dotenv from "dotenv";
dotenv.config(); // ← Обязательно

import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.5.12", // Обновляем до последней версии
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",  // это URL для zkSync Testnet
      accounts: [process.env.PRIVATE_KEY!],  // подключение через приватный ключ
      zksync: true,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",  // или используешь другой Ethereum провайдер
      accounts: [process.env.PRIVATE_KEY!],
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london",
      
    },
  },
};

export default config;