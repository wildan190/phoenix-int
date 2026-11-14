# Stage 1: Build Nuxt 3 application
FROM node:22-alpine AS builder

WORKDIR /app

# Configure npm for flaky networks: auto-retry and longer timeout
RUN npm config set fetch-retry-mintimeout 20000 \
 && npm config set fetch-retry-maxtimeout 120000 \
 && npm config set fetch-retries 5 \
 && npm config set maxsockets 1

# Install dependencies based on package-lock.json
COPY package*.json ./
RUN npm ci

# Copy project files and build
COPY . .
RUN npm run build

# Stage 2: Production runner
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy output from builder stage
COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

