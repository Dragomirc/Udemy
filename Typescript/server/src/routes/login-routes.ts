// BASIC TYPESCRIPT INTEGRATION WITH EXPRESS

// import { Router, Request, Response, NextFunction } from 'express';
// const router = Router();

// interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined };
// }

// function requireAuth(req: Request, res: Response, next: NextFunction): void {
//   if (req.session && req.session.loggedIn) {
//     next();
//     return;
//   }
//   res.status(403);
//   res.send('Not permitted');
// }
// router.get('/', (req: Request, res: Response) => {
//   if (req.session && req.session.loggedIn) {
//     res.send(`
//       <div>You are currently logged in.</div>
//       <a href="/logout">Logout</a>
//     `);
//   } else {
//     res.send(`
//     <div>You are not logged in.</div>
//     <a href="/login">Login</a>
//   `);
//   }
// });

// router.get('/logout', (req: Request, res: Response) => {
//   req.session = undefined;
//   res.redirect('/');
// });
// router.get('/login', (req: Request, res: Response) => {
//   res.send(`
//   <form method="POST">
//     <div>
//       <label>Email</label>
//       <input name="email" />
//     </div>
//     <div>
//       <label>Password</label>
//       <input name="password" type="password" />
//     </div>
//     <button>Submit</button>
//   </form>
//   `);
// });

// router.post('/login', (req: RequestWithBody, res: Response) => {
//   const { email, password } = req.body;
//   if (email && password && email === 'hi@hi.com' && password === 'password') {
//     req.session = { loggedIn: true };
//     res.redirect('/');
//   } else {
//     res.status(401).send('Invalid email or password.');
//   }
// });

// router.get('/protected', requireAuth, (req: Request, res: Response) => {
//   res.status(200).send(`
//   <div>You've reached a protected route</div>
//   `);
// });

// export { router };
