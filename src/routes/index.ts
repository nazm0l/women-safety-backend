import { Router } from "express";
import { HelplineRoutes } from "../modules/helpline/helpline.routes";
import { Authorization } from "../modules/auth/auth.routes";

const router = Router();


const moduleRoutes = [
    {
      path: "/hr",
      route: HelplineRoutes,
    },
    {
      path: "/auth",
      route: Authorization,
    }
    
  ];
  
  // Use each route in the application
  moduleRoutes.forEach((route) => router.use(route.path, route.route));
  
  export default router;