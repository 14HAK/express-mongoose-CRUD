import mongoose from 'mongoose';
import envConfig from './config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(envConfig.mondo_uri as string);

    app.listen(envConfig?.port, () =>
      console.log(`server running at port: http://localhost:${envConfig?.port}`)
    );
  } catch (error) {
    console.log(error);
  }
}
main();
