module.exports = {
    projects: [
        {
            id: 1,
            title: "Lorem Ipsum",
            description: "",
            bids: [1],
            user_id: 1,
            expiration: new Date('2018-11-26')
        },
        {
            id: 2,
            title: "Sic Dolor amet",
            description: "",
            bids: [2],
            user_id: 2,
            expiration: new Date('2018-11-25')
        },
        {
            id: 3,
            title: "Blah",
            description: "",
            bids: [],
            user_id: 4,
            expiration: new Date('2018-10-26')
        }
    ],
    users: [
        {
            id: 1,
            name: "John Doe",
            projects: [1],
            bids: [2],
            bidder: true,
            poster: true
        },
        {
            id: 2,
            name: "Jane Doe",
            projects: [2],
            bids: [1],
            bidder: true,
            poster: true
        },
        {
            id: 3,
            name: "Joe De",
            projects: [],
            bids: [1],
            bidder: true,
            poster: false
        },
        {
            id: 4,
            name: "Jenn Do",
            projects: [2],
            bids: [],
            bidder: false,
            poster: true
        }
    ],
    bids: [
        {
            id: 1,
            user_id: 1,
            project_id: 1,
            comments: "Consectetur adipiscing elit",
            price: 23
        },
        {
            id: 2,
            user_id: 2,
            project_id: 2,
            comments: "Nam molestie pellentesque dui",
            price: 23
        }
    ]
}