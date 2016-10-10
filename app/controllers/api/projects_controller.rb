class Api::ProjectsController < ApplicationController

	def create
		@project = Project.new(project_params)

		if @project.save
			render "api/projects/show"
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

  def edit
    @project = Project.find_by(id: params[:id])

    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    if @project
      render "api/projects/show"
    else

    end
  end

	private

	def project_params
		params.require(:project).permit(:title, :user_id, :head_photo_url, :bio, :description, :end_date, :head_photo_url, :goal, :pledged )
	end

end
