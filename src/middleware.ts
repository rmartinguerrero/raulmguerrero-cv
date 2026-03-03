export async function onRequest(context, next) {
  const { url, cookies, redirect } = context;

  if (url.pathname.startsWith("/cv")) {
    const auth = cookies.get("cv_auth");

    if (!auth || auth.value !== "authorized") {
      return redirect("/login");
    }
  }

  return next();
}