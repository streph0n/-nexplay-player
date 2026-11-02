import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {VideoView,useVideoPlayer} from 'expo-video';
export default function Player({url}:{url:string}){const player=useVideoPlayer({uri:url,contentType:/\.m3u8(?:\?|$)/i.test(url)?'hls':'auto'},p=>p.play());return <View><VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture/><Text style={styles.notice}>Reprodução sujeita ao formato e aos direitos de acesso.</Text></View>}
const styles=StyleSheet.create({video:{width:'100%',aspectRatio:16/9,backgroundColor:'#000'},notice:{color:'#a8b3cc',marginTop:8,fontSize:12}})