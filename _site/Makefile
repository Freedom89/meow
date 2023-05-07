run:
	docker run -it --rm \
	--platform linux/amd64 \
    --volume="$(shell pwd):/srv/jekyll" \
    -p 4000:4000 jekyll/jekyll \
    jekyll serve