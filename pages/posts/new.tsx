import Layout from '../../components/Layout'
import { createPost } from '../../lib/posts'
import { useForm } from "react-hook-form";
import styles from './new.module.css';


type FormValues = {
    title: string
    content: string
}

export default function PostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    return (
        <Layout title="新規投稿ページ">
    <form
        onSubmit={handleSubmit((data:FormValues) => {
            const items = createPost(data.title, data.content)
            if (items) {
                const win: Window = window
                win.location  = '/posts'
            }
        })}
    >
        <label className= { styles.form_blk }>タイトル</label>
        <input className= { styles.title_text } 
            {...register("title", { required: true, maxLength: 10000 })} />
        {errors.title && <p className= { styles.alert } >必須項目です</p>}
        <label className= { styles.form_blk } >本文</label>
        <textarea className= { styles.content_text }
            {...register("content", { required: true, maxLength: 10000 })}
        />
        {errors.Content && <p className= { styles.alert } >必須項目です</p>}
        <input  className= { styles.form_blk } type="submit" />
    </form>
    </Layout>
    );
}