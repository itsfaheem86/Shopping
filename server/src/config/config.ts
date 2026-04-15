import dotenv from 'dotenv';

dotenv.config({path: `.env.${process.env.NODE_ENV}`});

interface Config {
  port: number;
  nodeEnv: string;
}

const requiredEnvVars = ['PORT', 'NODE_ENV'];

for (const varName of requiredEnvVars) {
  if (!process.env[varName]) {
    throw new Error(`Environment variable ${varName} is required but not set.`);
  }
}

const config: Config = {
  port: Number(process.env.PORT!),
  nodeEnv: process.env.NODE_ENV!,
};

export default config;
