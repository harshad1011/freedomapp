var model = {
    name: String,
    price: Number,
    description: String,
    images: [String],
    tags: [String], // use to tag product with various traits to categorize it
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    outOfStock: Boolean,
    collection: {
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }
};