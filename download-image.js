const fs = require('fs')
const path = require('path')
const Axios = require('axios')
const imgs = require('./imgs.json')


async function downloadFile(url, filepath, name) {
	if (!fs.existsSync(filepath)) {
		fs.mkdirSync(filepath);
	}
	const mypath = path.resolve(filepath, name);
	const writer = fs.createWriteStream(mypath);
	const response = await Axios({
		url,
		method: "GET",
		responseType: "stream",
	});
	response.data.pipe(writer);
	return new Promise((resolve, reject) => {
		writer.on("finish", resolve);
		writer.on("error", reject);
	});
}

const init = async () => {
	for (let index = 0; index < imgs.length; index++) {
		console.log(index)
		const element = imgs[index];
		const { smUrl, lgUrl, title, subtitle } = element
		await downloadFile(smUrl, './sm-images', `${title}-${subtitle}.jpg`.replace(/\s*/g, ""))
		await downloadFile(lgUrl, './lg-images', `${title}-${subtitle}.jpg`.replace(/\s*/g, ""))
	}
}

init().catch(err => {
	console.log('存在图片下载失败')
})
