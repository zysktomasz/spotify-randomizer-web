Link to website: [spotifyrandomizer.zysk.it](https://spotifyrandomizer.zysk.it)

Link to consumed REST API
repository: [github.com/zysktomasz/spotify-randomizer](https://github.com/zysktomasz/spotify-randomizer)

### Showcase

#### Main page

<a href="https://i.imgur.com/gyA4Ypa.png"><img src="https://i.imgur.com/gyA4Ypa.png" alt="drawing" width="900"/></a>

#### Playlists list

<a href="https://i.imgur.com/5LE9CQh.png"><img src="https://i.imgur.com/5LE9CQh.png" alt="drawing" width="900"/></a>

#### Tracks list

<a href="https://i.imgur.com/05GHyV2.png"><img src="https://i.imgur.com/05GHyV2.png" alt="drawing" width="900"/></a>

#### Reorder tracks dialog panel

<a href="https://i.imgur.com/0rlKvrZ.png"><img src="https://i.imgur.com/0rlKvrZ.png" alt="drawing" width="900"/></a>

### Technologies used

- React with Typescript
- [Material-UI](https://material-ui.com/) - Material Design framework
- [Redux](https://redux.js.org/) - state management
- [Axios](https://github.com/axios/axios) - HTTP communication
  with [SpotifyRandomizer backend](https://github.com/zysktomasz/spotify-randomizer)
- [ESLint](https://eslint.org/) - linter
- [Prettier](https://prettier.io/) - code formatting

### Architecture

#### Use of REST API

This project is React SPA consuming REST API
of [SpotifyRandomizer backend](https://github.com/zysktomasz/spotify-randomizer) project. All communication between
client and Spotify API is made through that backend project.

Calls to API are made with [Axios](https://github.com/axios/axios).

#### State

SPA uses [Redux](https://redux.js.org/) to store state - essentially only details of authenticated user are stored. This
state is also saved to and loaded from _localStorage_.

#### Deployment

Built application is deployed and stored on AWS [S3 bucket](https://aws.amazon.com/s3/) that is configured to host a
static website. Website can be visited by going to [spotifyrandomizer.zysk.it](https://spotifyrandomizer.zysk.it). It is
cached and served to users by [Cloudfront](https://aws.amazon.com/cloudfront/)

## How to build and deploy application to AWS S3

1. Remember to first build application

   `npm run build`
2. Deploy to S3 using AWS CLI

   `aws s3 sync build/ s3://spotifyrandomizer.zysk.it --acl public-read`
3. Since Cloudfront distributions loads and caches S3 files in Edge locations you'll have to trigger refreshing them. It
   can be done by starting 'Invalidation' for your Cloudfront distribution.

   `aws cloudfront create-invalidation --distribution-id E1ZIWLF7GHAA3Q --paths '/*'`

