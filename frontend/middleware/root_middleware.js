import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import ProjectMiddleware from '../middleware/project_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProjectMiddleware
);

export default RootMiddleware;
