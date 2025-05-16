import express, { json, urlencoded } from 'express';
import cors from 'cors';
import path from 'path';
import {
  clientErrorMiddleware,
  serviceErrorMiddleware,
  routeNotFoundMiddleware,
  requestLoggerMiddleware
} from '@/middlewares';
import config from '@/config';
import transporter from '@/domain/email/transporter';

import EmailPreviewController from '@/controllers/email-preview-controller';
import UserController from '@/controllers/api/user-controller';
import SessionController from '@/controllers/api/session-controller';
import PassResetController from '@/controllers/api/pass-reset-controller';
import MembershipController from '@/controllers/api/membership-controller';
import OrganizationController from '@/controllers/api/organization-controller';

import AuthService from '@/domain/auth/auth-service';
import EmailService from '@/domain/email/email-service';
import OrgsService from '@/domain/orgs/orgs-service';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
// app.use(requestLoggerMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// const emailService = new EmailService(transporter);
// const authService = new AuthService(emailService);
// const orgsService = new OrgsService(emailService);

// const emailPreviewController = new EmailPreviewController(emailService);

// const userController = new UserController(authService);
// const sessionController = new SessionController(authService);
// const passResetController = new PassResetController(authService);
// const membershipController = new MembershipController(orgsService);
// const organizationController = new OrganizationController(orgsService);

// app.use('/', emailPreviewController.router);

// app.use('/api', [
//   userController.router,
//   sessionController.router,
//   passResetController.router,
//   membershipController.router,
//   organizationController.router
// ]);

// app.get('/', (req, res) => {
//   res.send({ health: 'ok' });
// });

// app.use(routeNotFoundMiddleware);
// app.use(clientErrorMiddleware);
// app.use(serviceErrorMiddleware);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});

process.on('uncaughtException', err => {
  console.error(err)
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

process.on('exit', code => {
  console.log(`Process exited with code: ${code}`)
})