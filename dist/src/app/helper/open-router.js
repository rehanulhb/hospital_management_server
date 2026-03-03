import axios from "axios";
import config from "../../config/index.js";
export const askOpenRouter = async (messages) => {
    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
        model: "openai/gpt-3.5-turbo", // or 'anthropic/claude-3-haiku'
        messages,
    }, {
        headers: {
            Authorization: `Bearer ${config.open_router_api_key}`,
            "Content-Type": "application/json",
        },
    });
    return response.data.choices[0].message.content;
};
//# sourceMappingURL=open-router.js.map