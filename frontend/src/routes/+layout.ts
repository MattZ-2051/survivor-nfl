import { updateUser } from '$store/user';
import { checkStorage } from '$utils';
/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const data = checkStorage();
	if (data) {
		updateUser({ username: data.tokenData?.username, id: data.tokenData?.sub });
	}
	// } else {
	//   const redirect =
	//     window.location.pathname.includes('signup') ||
	//     window.location.pathname.includes('login') ||
	//     window.location.pathname.length === 1;
	//   if (!redirect) {
	//     window.location.pathname = '/';
	//   }
	// }
	return {};
}

export const ssr = false;
