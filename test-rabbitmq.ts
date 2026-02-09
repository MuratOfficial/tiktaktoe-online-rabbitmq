import { EventsChanel } from "./shared/lib/events";

async function testRabbitMQ() {
    try {
        console.log("🔌 Попытка подключения к RabbitMQ...");
        console.log("URL:", process.env.MB_URL);

        const channel = new EventsChanel("test-channel");

        // Создаем канал
        await channel.createChannel();
        console.log("✅ Успешно подключились к RabbitMQ!");

        // Тестируем отправку сообщения
        await channel.emit("test-key", { message: "Hello RabbitMQ!" });
        console.log("✅ Сообщение успешно отправлено!");

        // Тестируем получение сообщения
        console.log("📨 Ожидание сообщений...");
        await channel.concume("test-key", async (data) => {
            console.log("✅ Получено сообщение:", data);
            process.exit(0);
        });

        // Отправляем тестовое сообщение
        setTimeout(async () => {
            await channel.emit("test-key", {
                message: "Test message",
                timestamp: new Date().toISOString()
            });
        }, 1000);

    } catch (error) {
        console.error("❌ Ошибка подключения к RabbitMQ:");
        console.error(error);
        process.exit(1);
    }
}

testRabbitMQ();
