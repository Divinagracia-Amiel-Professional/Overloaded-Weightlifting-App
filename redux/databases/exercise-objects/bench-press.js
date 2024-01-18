import { benchPressGif } from "../../../constants/images"

export default 
{
    id: "2paqSykbxVb7omFXwLIe",
    name: "Bench Press",
    description: "The bench press, or chest press, is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench.",
    difficulty: 4,
    focus: [
        "tri_lat",
        "delts_front",
        "chest_upper",
        "chest_lower"
    ],
    group: [
        "arms",
        "chest",
        "push"
    ],
    resources: {
        img_urls: [
            {
                url: benchPressGif,
                title: "Bench Press Form",
                description: "Proper Form of Bench Press"
            },
            {
                url: "https://www.ironmanmagazine.com/wp-content/uploads/Bench-Press-tutorial_chest-scaled.jpeg",
                title: "Bench Press",
                description: "The bench press is the most popular and widely used exercise globally, targeting your chest, shoulders, and triceps. "
            }
        ],
        vid_urls: [
            {
                url: "https://www.youtube.com/watch?v=gRVjAtPip0Y&pp=ygUUYmVuY2ggcHJlc3MgdHV0b3JpYWw%3D",
                title: "How to Perform Bench Press - Tutorial & Proper Form",
                description: "Bench Press is one of the best exercises in your arsenal; you've just gotta know how to do it right. In this video we show you how, going over technique, form and how to perform the perfect Bench Press!"
            }
        ]
    }
}