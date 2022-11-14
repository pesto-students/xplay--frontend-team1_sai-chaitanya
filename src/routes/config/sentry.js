import { BrowserTracing } from "@sentry/tracing";

import { SENTRY_DSN } from "../constants";

const SENTRY_CONFIG = {
    dsn: SENTRY_DSN,
    integrations: [new BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
};

export { SENTRY_CONFIG };
