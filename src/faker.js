import {Faker} from 'Faker'

export function messageGenerator(count = 1) {
    const messages = [];

    do {
        messages.push({
            id: Faker.random.uuid(),
            type: Faker.random.boolean() ? 'receive' : 'sent',
            message: Faker.lorem.sentence(),
            time: Faker.date.recent().toLocaleTimeString()
        })
        count--;
    } while (count)

    return messages;
}