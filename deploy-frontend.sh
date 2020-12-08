cd frontend
npm install
npm run build
aws s3 cp build/ s3://saildog --recursive --include "*" --acl public-read