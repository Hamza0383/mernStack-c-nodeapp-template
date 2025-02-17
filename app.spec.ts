import request from "supertest";
import { calculateDiscount } from "./src/uitils";
import app from "./src/app";

describe("App", () => {
    it("should retrun correct discount price", () => {
        const discout = calculateDiscount(100, 10);
        expect(discout).toBe(10);
    });
    it("should return 200 status code", async () => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
