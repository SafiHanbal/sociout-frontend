import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Placeholder from '../../assets/image-placeholder.jpg';

import {
  Container,
  Heading,
  PreviewContainer,
  UploadControls,
  CustomizedForm,
  FileLabel,
  FileInput,
  Header,
  CustomizedButton,
} from './upload.styles';
import Post from '../../components/post/post.component';

import { selectUser } from '../../store/user/user.selector';
import { createPostStart } from '../../store/post/post.action';

const Upload = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [caption, setCaption] = useState('');
  const [imagesURLs, setImagesURLs] = useState([Placeholder]);
  const [images, setImages] = useState(null);

  const post = {
    images: imagesURLs,
    caption,
    user,
  };

  const handleSetCaption = (event) => {
    setCaption(event.target.value);
  };

  const handleUploadFile = (event) => {
    setImages(event.target.files);
    const filesArr = [];
    for (let i = 0; i < event.target.files.length; i++) {
      filesArr.push(URL.createObjectURL(event.target.files[i]));
    }
    setImagesURLs(filesArr);
  };

  const handleCreatePost = () => {
    if (!images?.length) return;

    const formData = new FormData();

    if (caption) {
      formData.append('caption', caption);
    }

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    dispatch(createPostStart(formData));
  };

  return (
    <Container>
      <PreviewContainer>
        <Post post={post} preview={true} />
      </PreviewContainer>
      <UploadControls>
        <CustomizedForm>
          <Header>
            <Heading>New Post</Heading>
            <CustomizedButton
              variant="success"
              type="button"
              onClick={handleCreatePost}
            >
              Create
            </CustomizedButton>
          </Header>
          <CustomizedForm.Group controlId="caption">
            <CustomizedForm.Label>Caption</CustomizedForm.Label>
            <CustomizedForm.Control
              as="textarea"
              maxLength={200}
              rows={4}
              onChange={handleSetCaption}
              spellCheck={false}
            />
          </CustomizedForm.Group>
          <FileLabel htmlFor="file">Add Files</FileLabel>
          <FileInput
            id="file"
            type="file"
            accept="image/*"
            multiple
            onChange={handleUploadFile}
          />
        </CustomizedForm>
      </UploadControls>
    </Container>
  );
};

export default Upload;
