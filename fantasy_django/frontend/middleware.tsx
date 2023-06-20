import { authMiddleware } from "@clerk/nextjs"
import { WithClerkMiddleware } from "@clerk/nextjs/dist/types/server"

export default authMiddleware({
  publicRoutes: ["/", "/login", "/sign-up"],
})
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
