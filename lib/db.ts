import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
// 如果全局变量已存在，则复用,防止每次修改代码热更新会创建新的实例；
export const db = globalThis.prisma || new PrismaClient();

// 在开发环境中，将 PrismaClient 实例挂载到全局对象
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
