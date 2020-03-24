import React from "react";

export class Icons {

	public static search = () => {
		return (
			<svg width="26" height="26" viewBox="0 0 57 57" fill="none" style={{ cursor: "pointer" }}>
				<g clipPath="url(#clip0)">
					<path d="M55.146 51.887L41.588 37.786C45.074 33.642 46.984 28.428 46.984 23C46.984 10.318 36.666 0 23.984 0C11.302 0 0.984009 10.318 0.984009 23C0.984009 35.682 11.302 46 23.984 46C28.745 46 33.282 44.564 37.161 41.838L50.822 56.046C51.393 56.639 52.161 56.966 52.984 56.966C53.763 56.966 54.502 56.669 55.063 56.129C56.255 54.982 56.293 53.08 55.146 51.887ZM23.984 6C33.358 6 40.984 13.626 40.984 23C40.984 32.374 33.358 40 23.984 40C14.61 40 6.98401 32.374 6.98401 23C6.98401 13.626 14.61 6 23.984 6Z" fill="#F65261" />
				</g>
				<defs>
					<clipPath id="clip0">
						<rect width="56.966" height="56.966" fill="white" />
					</clipPath>
				</defs>
			</svg>
		);
	}

	public static logo = () => {
		return (
			<svg width="300" height="35" viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="1" d="M7.98 8.08C9.31333 8.08 10.3867 8.48 11.2 9.28C12.0267 10.08 12.44 11.2667 12.44 12.84V19H9.32V13.32C9.32 12.4667 9.13333 11.8333 8.76 11.42C8.38667 10.9933 7.84667 10.78 7.14 10.78C6.35333 10.78 5.72667 11.0267 5.26 11.52C4.79333 12 4.56 12.72 4.56 13.68V19H1.44V8.24H4.42V9.5C4.83333 9.04667 5.34667 8.7 5.96 8.46C6.57333 8.20667 7.24667 8.08 7.98 8.08ZM25.9253 13.66C25.9253 13.7 25.9053 13.98 25.8653 14.5H17.7253C17.872 15.1667 18.2186 15.6933 18.7653 16.08C19.312 16.4667 19.992 16.66 20.8053 16.66C21.3653 16.66 21.8586 16.58 22.2853 16.42C22.7253 16.2467 23.132 15.98 23.5053 15.62L25.1653 17.42C24.152 18.58 22.672 19.16 20.7253 19.16C19.512 19.16 18.4386 18.9267 17.5053 18.46C16.572 17.98 15.852 17.32 15.3453 16.48C14.8386 15.64 14.5853 14.6867 14.5853 13.62C14.5853 12.5667 14.832 11.62 15.3253 10.78C15.832 9.92667 16.5186 9.26667 17.3853 8.8C18.2653 8.32 19.2453 8.08 20.3253 8.08C21.3786 8.08 22.332 8.30667 23.1853 8.76C24.0386 9.21333 24.7053 9.86667 25.1853 10.72C25.6786 11.56 25.9253 12.54 25.9253 13.66ZM20.3453 10.44C19.6386 10.44 19.0453 10.64 18.5653 11.04C18.0853 11.44 17.792 11.9867 17.6853 12.68H22.9853C22.8786 12 22.5853 11.46 22.1053 11.06C21.6253 10.6467 21.0386 10.44 20.3453 10.44ZM34.9425 18.48C34.6358 18.7067 34.2558 18.88 33.8025 19C33.3625 19.1067 32.8958 19.16 32.4025 19.16C31.1225 19.16 30.1292 18.8333 29.4225 18.18C28.7292 17.5267 28.3825 16.5667 28.3825 15.3V10.88H26.7225V8.48H28.3825V5.86H31.5025V8.48H34.1825V10.88H31.5025V15.26C31.5025 15.7133 31.6158 16.0667 31.8425 16.32C32.0825 16.56 32.4158 16.68 32.8425 16.68C33.3358 16.68 33.7558 16.5467 34.1025 16.28L34.9425 18.48ZM39.8795 8.48H42.6395V10.88H39.9595V19H36.8395V10.88H35.1795V8.48H36.8395V8C36.8395 6.77333 37.1995 5.8 37.9195 5.08C38.6529 4.36 39.6795 4 40.9995 4C41.4662 4 41.9062 4.05333 42.3195 4.16C42.7462 4.25333 43.0995 4.39333 43.3795 4.58L42.5595 6.84C42.1995 6.58667 41.7795 6.46 41.2995 6.46C40.3529 6.46 39.8795 6.98 39.8795 8.02V8.48ZM44.1995 4.16H47.3195V19H44.1995V4.16ZM50.2291 8.24H53.3491V19H50.2291V8.24ZM51.7891 6.74C51.2157 6.74 50.7491 6.57333 50.3891 6.24C50.0291 5.90667 49.8491 5.49333 49.8491 5C49.8491 4.50667 50.0291 4.09333 50.3891 3.76C50.7491 3.42667 51.2157 3.26 51.7891 3.26C52.3624 3.26 52.8291 3.42 53.1891 3.74C53.5491 4.06 53.7291 4.46 53.7291 4.94C53.7291 5.46 53.5491 5.89333 53.1891 6.24C52.8291 6.57333 52.3624 6.74 51.7891 6.74ZM63.0847 19L60.7247 15.7L58.2847 19H54.8847L59.0247 13.58L55.0247 8.24H58.5247L60.8047 11.38L63.1447 8.24H66.4647L62.4647 13.5L66.6247 19H63.0847ZM70.0392 10.54C70.3726 9.83333 70.8659 9.3 71.5192 8.94C72.1859 8.58 73.0059 8.4 73.9792 8.4V9.78L73.6392 9.76C72.5326 9.76 71.6659 10.1 71.0392 10.78C70.4126 11.46 70.0992 12.4133 70.0992 13.64V19H68.6792V8.48H70.0392V10.54ZM80.7527 19.1C79.7393 19.1 78.826 18.8733 78.0127 18.42C77.1993 17.9533 76.5593 17.3133 76.0927 16.5C75.626 15.6867 75.3927 14.7667 75.3927 13.74C75.3927 12.7133 75.626 11.7933 76.0927 10.98C76.5593 10.1667 77.1993 9.53333 78.0127 9.08C78.826 8.62667 79.7393 8.4 80.7527 8.4C81.766 8.4 82.6793 8.62667 83.4927 9.08C84.306 9.53333 84.9393 10.1667 85.3927 10.98C85.8593 11.7933 86.0927 12.7133 86.0927 13.74C86.0927 14.7667 85.8593 15.6867 85.3927 16.5C84.9393 17.3133 84.306 17.9533 83.4927 18.42C82.6793 18.8733 81.766 19.1 80.7527 19.1ZM80.7527 17.84C81.4993 17.84 82.166 17.6733 82.7527 17.34C83.3527 16.9933 83.8193 16.5067 84.1527 15.88C84.486 15.2533 84.6527 14.54 84.6527 13.74C84.6527 12.94 84.486 12.2267 84.1527 11.6C83.8193 10.9733 83.3527 10.4933 82.7527 10.16C82.166 9.81333 81.4993 9.64 80.7527 9.64C80.006 9.64 79.3327 9.81333 78.7327 10.16C78.146 10.4933 77.6793 10.9733 77.3327 11.6C76.9993 12.2267 76.8327 12.94 76.8327 13.74C76.8327 14.54 76.9993 15.2533 77.3327 15.88C77.6793 16.5067 78.146 16.9933 78.7327 17.34C79.3327 17.6733 80.006 17.84 80.7527 17.84ZM98.4717 8.48V19H97.1117V17.08C96.7384 17.72 96.2251 18.22 95.5717 18.58C94.9184 18.9267 94.1717 19.1 93.3317 19.1C91.9584 19.1 90.8717 18.72 90.0717 17.96C89.2851 17.1867 88.8917 16.06 88.8917 14.58V8.48H90.3117V14.44C90.3117 15.5467 90.5851 16.3867 91.1317 16.96C91.6784 17.5333 92.4584 17.82 93.4717 17.82C94.5784 17.82 95.4517 17.4867 96.0917 16.82C96.7317 16.14 97.0517 15.2 97.0517 14V8.48H98.4717ZM102.449 4.16H103.869V19H102.449V4.16ZM116.98 14.18H108.18C108.26 15.2733 108.68 16.16 109.44 16.84C110.2 17.5067 111.16 17.84 112.32 17.84C112.973 17.84 113.573 17.7267 114.12 17.5C114.667 17.26 115.14 16.9133 115.54 16.46L116.34 17.38C115.873 17.94 115.287 18.3667 114.58 18.66C113.887 18.9533 113.12 19.1 112.28 19.1C111.2 19.1 110.24 18.8733 109.4 18.42C108.573 17.9533 107.927 17.3133 107.46 16.5C106.993 15.6867 106.76 14.7667 106.76 13.74C106.76 12.7133 106.98 11.7933 107.42 10.98C107.873 10.1667 108.487 9.53333 109.26 9.08C110.047 8.62667 110.927 8.4 111.9 8.4C112.873 8.4 113.747 8.62667 114.52 9.08C115.293 9.53333 115.9 10.1667 116.34 10.98C116.78 11.78 117 12.7 117 13.74L116.98 14.18ZM111.9 9.62C110.887 9.62 110.033 9.94667 109.34 10.6C108.66 11.24 108.273 12.08 108.18 13.12H115.64C115.547 12.08 115.153 11.24 114.46 10.6C113.78 9.94667 112.927 9.62 111.9 9.62ZM125.43 18.36C125.163 18.6 124.83 18.7867 124.43 18.92C124.043 19.04 123.637 19.1 123.21 19.1C122.223 19.1 121.463 18.8333 120.93 18.3C120.397 17.7667 120.13 17.0133 120.13 16.04V9.68H118.25V8.48H120.13V6.18H121.55V8.48H124.75V9.68H121.55V15.96C121.55 16.5867 121.703 17.0667 122.01 17.4C122.33 17.72 122.783 17.88 123.37 17.88C123.663 17.88 123.943 17.8333 124.21 17.74C124.49 17.6467 124.73 17.5133 124.93 17.34L125.43 18.36ZM133.282 18.36C133.015 18.6 132.682 18.7867 132.282 18.92C131.895 19.04 131.488 19.1 131.062 19.1C130.075 19.1 129.315 18.8333 128.782 18.3C128.248 17.7667 127.982 17.0133 127.982 16.04V9.68H126.102V8.48H127.982V6.18H129.402V8.48H132.602V9.68H129.402V15.96C129.402 16.5867 129.555 17.0667 129.862 17.4C130.182 17.72 130.635 17.88 131.222 17.88C131.515 17.88 131.795 17.8333 132.062 17.74C132.342 17.6467 132.582 17.5133 132.782 17.34L133.282 18.36ZM144.656 14.18H135.856C135.936 15.2733 136.356 16.16 137.116 16.84C137.876 17.5067 138.836 17.84 139.996 17.84C140.649 17.84 141.249 17.7267 141.796 17.5C142.342 17.26 142.816 16.9133 143.216 16.46L144.016 17.38C143.549 17.94 142.962 18.3667 142.256 18.66C141.562 18.9533 140.796 19.1 139.956 19.1C138.876 19.1 137.916 18.8733 137.076 18.42C136.249 17.9533 135.602 17.3133 135.136 16.5C134.669 15.6867 134.436 14.7667 134.436 13.74C134.436 12.7133 134.656 11.7933 135.096 10.98C135.549 10.1667 136.162 9.53333 136.936 9.08C137.722 8.62667 138.602 8.4 139.576 8.4C140.549 8.4 141.422 8.62667 142.196 9.08C142.969 9.53333 143.576 10.1667 144.016 10.98C144.456 11.78 144.676 12.7 144.676 13.74L144.656 14.18ZM139.576 9.62C138.562 9.62 137.709 9.94667 137.016 10.6C136.336 11.24 135.949 12.08 135.856 13.12H143.316C143.222 12.08 142.829 11.24 142.136 10.6C141.456 9.94667 140.602 9.62 139.576 9.62Z" fill="#F65261" />
			</svg>
		);
	}
}

export { Icons as icon };
