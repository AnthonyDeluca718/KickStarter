import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import ProjectMiddleware from '../middleware/project_middleware';
import SearchMiddleware from '../middleware/search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProjectMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
