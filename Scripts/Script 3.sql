

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE SelectHijos 1
@IdPersonal INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT hij.[IdDerHab]
		  ,hij.[IdPersonal]
		  ,hij.[ApPaterno]
		  ,hij.[ApMaterno]
		  ,hij.[Nombre1]
		  ,hij.[Nombre2]
		  ,hij.[NombreCompleto]
		  ,hij.[FhcNac]
		  ,per.NombreCompleto AS [NombreCompletoPersonal]
	FROM Personal per
		INNER JOIN [dbo].[Hijos] hij ON(hij.IdPersonal = per.IdPersonal)
	WHERE
		hij.[IdPersonal] = @IdPersonal
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE SelectHijosById
@IdDerHab INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [IdDerHab]
		  ,[IdPersonal]
		  ,[ApPaterno]
		  ,[ApMaterno]
		  ,[Nombre1]
		  ,[Nombre2]
		  ,[NombreCompleto]
		  ,[FhcNac]
	FROM [dbo].[Hijos]
	WHERE
		[IdDerHab] = @IdDerHab
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE InsertHijos
@IdPersonal INT
,@ApPaterno	VARCHAR(50)
,@ApMaterno VARCHAR(50)
,@Nombre1   VARCHAR(50)
,@Nombre2   VARCHAR(50)
,@FhcNac    DATE
,@FhcIngreso DATE
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO [dbo].[Hijos]
			   ([IdPersonal]
			   ,[ApPaterno]
			   ,[ApMaterno]
			   ,[Nombre1]
			   ,[Nombre2]
			   ,[FhcNac])
     VALUES
           (@IdPersonal,
		   @ApPaterno,
		   @ApMaterno,
		   @Nombre1,
		   @Nombre2,
		   @FhcNac)
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE UpdateHijos
@IdDerHab INT
,@IdPersonal INT
,@ApPaterno	VARCHAR(50)
,@ApMaterno VARCHAR(50)
,@Nombre1   VARCHAR(50)
,@Nombre2   VARCHAR(50)
,@FhcNac    DATE
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE [dbo].[Hijos]
	SET 
		   [IdPersonal] = @IdPersonal
		  ,[ApPaterno] = @ApPaterno
		  ,[ApMaterno] = @ApMaterno
		  ,[Nombre1] = @Nombre1
		  ,[Nombre2] = @Nombre2
		  ,[FhcNac] = @FhcNac
	WHERE [IdDerHab] = @IdDerHab
END

GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE DeleteHijos
@IdDerHab INT
AS
BEGIN
	SET NOCOUNT ON;

	DELETE FROM [dbo].[Hijos]
	WHERE [IdDerHab] = @IdDerHab
END

GO

