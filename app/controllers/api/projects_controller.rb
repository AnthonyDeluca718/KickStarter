class Api::ProjectsController < ApplicationController

	def create
    @rewards = params[:project][:rewards]
		@project = Project.new(project_params)
    @project.user_id = current_user.id

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
      @rewards = @project.rewards
      render "api/projects/show"
    else
      render json: "Project not found", status: 404
    end
  end

	private

	def project_params
		params.require(:project).permit(:title, :bio, :description, :end_date, :goal, :category_id, :head_image )
	end

end
