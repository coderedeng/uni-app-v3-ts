import { ConfigEnv, UserConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import Unocss from 'unocss/vite';

//发布时动态修改 manifest.json
// if (process.env.NODE_ENV === 'production') {
// 	// 读取 manifest.json ，修改后重新写入
// 	const fs = require('fs');
// 	const manifestPath = './src/manifest.json';
// 	let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
// 	function replaceManifest(path: string, value: any) {
// 		const arr = path.split('.');
// 		const len = arr.length;
// 		const lastItem = arr[len - 1];

// 		let i = 0;
// 		let ManifestArr = Manifest.split(/\n/);

// 		for (let index = 0; index < ManifestArr.length; index++) {
// 			const item = ManifestArr[index];
// 			if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
// 			if (i === len) {
// 				const hasComma = /,/.test(item);
// 				ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`);
// 				break;
// 			}
// 		}

// 		Manifest = ManifestArr.join('\n');
// 	}
// 	let Data1 = new Date().toLocaleDateString();
// 	let Data2 = new Date().toLocaleTimeString();
// 	let Data_ = Data1.replace(/\//g, '-') + ' ' + Data2;
// 	// 使用
// 	replaceManifest('description', JSON.stringify(`app平台-${Data_}`));
// 	replaceManifest(
// 		'versionName',
// 		JSON.stringify(
// 			String(Number(JSON.parse(Manifest).versionCode) + 1)
// 				.split('')
// 				.join('.')
// 		)
// 	);
// 	replaceManifest('versionCode', JSON.stringify(String(Number(JSON.parse(Manifest).versionCode) + 1)));
// 	fs.writeFileSync(manifestPath, Manifest, { flag: 'w' });
// }

// https://vitejs.cn/config/
export default ({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	return {
		base: './',
		resolve: {
			alias: {
				'@': resolve('./src'),
			},
		},
		define: {
			'process.env': {},
		},
		server: {
			host: true,
			// open: true,
			port: env.VITE_PORT as any,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
				'/upload': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/upload/, ''),
				},
			},
		},
		plugins: [
			uni(),
			Unocss(),
			// eslintPlugin({
			//   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
			//   exclude: ['./node_modules/**'],
			//   cache: false,
			// }),
		],
		css: {
			preprocessorOptions: {
				scss: {
					// additionalData: '@import "@/assets/style/main.scss";',
				},
			},
		},
	};
};
