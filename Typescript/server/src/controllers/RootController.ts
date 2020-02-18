import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>You are currently logged in.</div>
        <a href="/auth/logout">Logout</a>
      `);
    } else {
      res.send(`
      <div>You are not logged in.</div>
      <a href="/auth/login">Login</a>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.status(200).send(`
    <div>You've reached a protected route</div>  
    `);
  }
}
