import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: ({
        emit: "event";
        level: "query";
    } | {
        emit: "event";
        level: "error";
    } | {
        emit: "event";
        level: "info";
    } | {
        emit: "event";
        level: "warn";
    })[];
}, "info" | "query" | "warn" | "error", import("@prisma/client/runtime/client").DefaultArgs>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map