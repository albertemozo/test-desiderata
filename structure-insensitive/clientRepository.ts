import {Client} from "./client";

export class ClientRepository {
    find(id: number): Client {
        return new Client(
            1,
            "John",
            "Doe",
            "john.doe@example.com",
            "123-456-7890",
            "123 Main St",
            "Anytown",
            "Anystate",
            "12345",
            "USA",
            new Date(1990, 0, 1),
            "male",
            "Engineer",
            "Tech Corp",
            ["reading", "gaming"],
            new Date(),
            new Date(),
            true,
            100,
            "premium",
            "English",
            "email"
        );
    }
}