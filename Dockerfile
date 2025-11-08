# Single-stage production Dockerfile
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy entire project
COPY . .

# Install production dependencies
RUN npm ci --only=production

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
