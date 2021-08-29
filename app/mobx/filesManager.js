import {makeAutoObservable} from 'mobx';
import db from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
// import {v4 as uuidv4} from 'uuid';
import auth from './auth';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import dayjs from 'dayjs';

// const RNFetchBlob = NativeModules.RNFetchBlob;

class FilesManager {
    data = [];
    progress = {};
    get dbRef() {
        if (auth.uid) {
            return db().ref(auth.uid);
        }
    }
    get storageRef() {
        if (auth.uid) {
            return storage().ref(auth.uid);
        }
    }

    async observeStorageData() {
        this.dbRef.on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                const arr = Object.values(data);
                const keys = Object.keys(data);

                const parsedData = arr.map((file, index) => ({
                    ...file,
                    date: dayjs(file.date)
                        .format('D MMMM YYYY')
                        .replace(new Date().getFullYear() + ' ', ''),
                    id: keys[index],
                }));
                this.data = parsedData;
                console.log(parsedData);
            } else {
                this.data = [];
                console.log('__noData__');
            }
        });
    }

    async deleteFile(name, id) {
        await this.storageRef.child(name).delete();
        await this.dbRef.child(id).remove();
        console.log(`File ${name} deleted`);
    }

    uploadFiles = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: DocumentPicker.types.allFiles,
            });
            for (const res of results) {
                console.log(res);
                await this.storageRef.put();
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };

    downloadFile(fileName, fileURL) {
        console.log(RNFetchBlob);
        const {config, fs} = RNFetchBlob;
        let {DownloadDir} = fs.dirs;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
                notification: true,
                path: `${DownloadDir}/${fileName}`,
                description: 'Downloading file.',
            },
        };
        config(options)
            .fetch('GET', fileURL)
            .then(res => {
                // do some magic here
            });
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new FilesManager();
