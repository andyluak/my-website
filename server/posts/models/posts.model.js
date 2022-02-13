const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: String,
	author: String,
	content: String,
	slug: String,
	tags: Array,
	featuredImage: String,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

postSchema.virtual('id').get(function () {
	return this._id.toHexString();
});

// Ensure virtual fields are serialised.
postSchema.set('toJSON', {
	virtuals: true,
});

const Post = mongoose.model('Posts', postSchema);

exports.createPost = (postData) => {
	const post = new Post(postData);
	return post.save();
};

exports.findById = async (id) => {
	let result = await Post.findById(id);
	result = result.toJSON();
	delete result._id;
	delete result.__v;
	return result;
};

exports.list = (perPage, page) => {
	return new Promise((resolve, reject) => {
		Post.find()
			.limit(perPage)
			.skip(perPage * page)
			.exec(function (err, posts) {
				if (err) {
					reject(err);
				} else {
					resolve(posts);
				}
			});
	});
};

exports.patchPost = (id, postData) => {
	return Post.findOneAndUpdate({ _id: id }, postData);
};

exports.removeById = (id) => {
	return Post.findByIdAndRemove(id);
};
