import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

var links = [
    {
        url: "https://inferise.github.io/public/",
        label: "Bug Report"
    },
    {
        url: "https://apps.apple.com/us/app/inferisehub/id1111111111",
        label: "Mac App Store"
    }
];

const app = reactive({
    data: {
        items: links
    }
});

createApp({ app }).mount("#model");