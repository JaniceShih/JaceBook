# debugger
json.extract! @post, :id, :body, :user_id, :created_at, :updated_at
json.extract! @post.user, :fname, :lname

if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end

json.comments @post.comments.each do |comment| 
    json.extract! comment, :id, :body, :user_id
    json.extract! comment.user, :fname, :lname
    if comment.user.photo.attached?
        json.photoUrl url_for(comment.user.photo)
    end
end