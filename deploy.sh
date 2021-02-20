# Push frontend
cd /Users/manoj/Desktop/Projects/msk-coders/msk-coders-frontend;
npm run build;
sh push.sh;

# Push backend
cd /Users/manoj/Desktop/Projects/msk-coders/msk-coders-backend;
sh push.sh

# deploy
rm -rf /Users/manoj/Desktop/Projects/msk-coders/msk-coders/docs;
cp -R /Users/manoj/Desktop/Projects/msk-coders/msk-coders-frontend/build /Users/manoj/Desktop/Projects/msk-coders/msk-coders/docs;
cd /Users/manoj/Desktop/Projects/msk-coders/msk-coders;
sh push.sh
