import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

var links = [
    {
        url: "https://github.com/inferise/public/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=",
        label: "File A Bug Report"
    },
    {
        url: "https://github.com/inferise/public/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=",
        label: "File A Feature Request"
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