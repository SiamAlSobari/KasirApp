import { t } from "elysia";

export const ApiResponseModel = t.Object({
    status: t.Number(),
    message: t.String(),
    data: t.Optional(t.Any()),
})
