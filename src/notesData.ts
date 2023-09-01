import { v4 } from "uuid";

const notes = [
    {
        title: "Note 1 title",
        content: "Note 1 content",
        tags: [{ tag: "coding", id: v4() }],
        color: "#cce0ff",
        priority: "high",
        isPinned: true,
        isRead: false,
        date: "23/09/01 PM 2.55 ",
        createdTime: new Date("Fri Sep 01  2023 14:55:22").getTime(),
        editedTime: null,
        id: v4()
    },
    {
        title: "Note 2 title",
        content: "Note 2 content",
        tags: [{ tag: "exercise", id: v4() }],
        color: "#ffcccc",
        priority: "high",
        isPinned: true,
        isRead: false,
        date: "23/09/01 PM 2.55 PM",
        createdTime: new Date("Fri Sep 01  2023 14:55:22").getTime(),
        editedTime: null,
        id: v4()
    }
]

export default notes;